interface StockItems {
    id: string;
    type: number;
    loc?: string;
}

interface StockItemType {
    weight: number;
    image: string;
    image_position: number;
}

interface Stock {
    items: StockItems[];
    item_type: { [cardUniqueId: number]: StockItemType };

    create: (game: Game, $div: any, cardwidth: number, cardheight: number) => void;
    setSelectionMode: (selectionMode: number) => void;            
    centerItems: boolean;
    updateDisplay: (from: string) => void;
    setSelectionAppearance: (appearance: string) => void;            
    onItemCreate: ($itemDiv: any, itemType, itemDivId: string) => void; 
    addToStockWithId: (cardUniqueId: number, cardId: string, from?: string) => void;
    addItemType: (cardUniqueId: number, cardWeight: number, cardsurl: string, id: number) => void;	
    getSelectedItems: () => Card[];
    unselectAll: () => void;
    removeAll: () => void;
    removeFromStockById: (id: string) => void;
    removeAllTo: (to: string) => void;
    unselectItem: (id: string) => void;
}