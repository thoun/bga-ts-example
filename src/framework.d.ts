/**
 * Framework interfaces
 */

interface Game {
    setup: (gamedatas: any) => void;
    onEnteringState: (stateName: string, args: any) => void;
    onLeavingState: (stateName: string ) => void;
    onUpdateActionButtons: (stateName: string, args: any) => void;
    setupNotifications: () => void;
    //format_string_recursive: (log: string, args: any) => void;
}

interface Notif<T> {
    args: T;
    log: string;
    move_id: number;
    table_id: string;
    time: number;
    type: string;
    uid: string;
}

/* TODO repace Function by (..params) => void */
interface Dojo {
    place: Function;
    style: Function;
    hitch: Function;
    addClass: (nodeId: string, className: string) => {};
    removeClass: (nodeId: string, className?: string) => {};
    toggleClass: (nodeId: string, className: string, forceValue: boolean) => {};
    connect: Function;
    query: Function;
    subscribe: Function;
    string: any;
    fx: any;
    marginBox: Function;
    fadeIn: Function;
    trim: Function;
}

type Gamestate = any; // TODO

interface Player {
    beginner: boolean;
    color: string;
    color_back: any | null;
    eliminated: number;
    id: string;
    is_ai: string;
    name: string;
    score: string;
    zombie: number;
}