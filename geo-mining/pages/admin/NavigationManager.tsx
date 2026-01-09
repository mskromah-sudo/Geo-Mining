import React, { useEffect, useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { supabase, NavigationItem } from '../../lib/supabaseClient';
import { Plus, Save, GripVertical, Trash2 } from 'lucide-react';

interface SortableItemProps {
    id: string;
    item: NavigationItem;
    onDelete: (id: string) => void;
    onUpdate: (id: string, updates: Partial<NavigationItem>) => void;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, item, onDelete, onUpdate }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="bg-white border border-gray-200 rounded-lg p-4 mb-3 flex items-center space-x-4 shadow-sm"
        >
            <div {...attributes} {...listeners} className="cursor-move text-gray-400 hover:text-gray-600">
                <GripVertical className="w-5 h-5" />
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                        Label
                    </label>
                    <input
                        type="text"
                        value={item.label}
                        onChange={(e) => onUpdate(id, { label: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Menu Item Label"
                    />
                </div>
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                        Link / Path
                    </label>
                    <input
                        type="text"
                        value={item.path}
                        onChange={(e) => onUpdate(id, { path: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="/about-us"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-2 pt-5">
                <button
                    onClick={() => onDelete(id)}
                    className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                >
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

const NavigationManager: React.FC = () => {
    const [items, setItems] = useState<NavigationItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        loadNavigation();
    }, []);

    const loadNavigation = async () => {
        try {
            const { data, error } = await supabase
                .from('navigation')
                .select('*')
                .order('order', { ascending: true });

            if (error) throw error;
            setItems(data || []);
        } catch (error) {
            console.error('Error loading navigation:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                return arrayMove(items, oldIndex, newIndex).map((item, index) => {
                    const typedItem = item as NavigationItem;
                    return {
                        ...typedItem,
                        order: index,
                    };
                });
            });
        }
    };

    const addItem = () => {
        const newItem: NavigationItem = {
            id: crypto.randomUUID(),
            label: 'New Link',
            path: '/',
            parent_id: null,
            order: items.length,
            is_visible: true,
        };
        setItems([...items, newItem]);
    };

    const updateItem = (id: string, updates: Partial<NavigationItem>) => {
        setItems(items.map((item) => (item.id === id ? { ...item, ...updates } : item)));
    };

    const deleteItem = (id: string) => {
        if (confirm('Are you sure you want to delete this item?')) {
            setItems(items.filter((item) => item.id !== id));
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            // Delete existing and re-insert (simple approach for reordering)
            // For production, upsert with explicit ID handling is better, but this works for simple lists
            // Actually, let's try upsert
            const { error } = await supabase.from('navigation').upsert(
                items.map((item, index) => ({
                    ...item,
                    order: index,
                }))
            );

            // We also need to handle deletions. The current list is the source of truth.
            // So items NOT in the current list but in DB should be deleted.
            // A simple strategy is to get all IDs from DB, find diff, delete.

            const { data: dbItems } = await supabase.from('navigation').select('id');
            const currentIds = items.map(i => i.id);
            const toDelete = dbItems?.filter(i => !currentIds.includes(i.id)).map(i => i.id) || [];

            if (toDelete.length > 0) {
                await supabase.from('navigation').delete().in('id', toDelete);
            }

            if (error) throw error;
            alert('Navigation menu saved!');
        } catch (error) {
            console.error('Error saving navigation:', error);
            alert('Failed to save navigation.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Navigation Menu</h1>
                    <p className="text-gray-600 mt-1">Manage your website's main menu links</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                    <Save className="w-5 h-5" />
                    <span>{saving ? 'Saving...' : 'Save Menu'}</span>
                </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={items.map((item) => item.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <div className="space-y-3">
                            {items.map((item) => (
                                <SortableItem
                                    key={item.id}
                                    id={item.id}
                                    item={item}
                                    onDelete={deleteItem}
                                    onUpdate={updateItem}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>

                <button
                    onClick={addItem}
                    className="mt-6 w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-600 transition flex items-center justify-center space-x-2 bg-white"
                >
                    <Plus className="w-5 h-5" />
                    <span className="font-semibold">Add Menu Item</span>
                </button>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                <p className="font-semibold mb-1">Note:</p>
                <p>
                    Drag and drop items to reorder them using the handle on the left. Changes are not published
                    until you click "Save Menu".
                </p>
            </div>
        </div>
    );
};

export default NavigationManager;
