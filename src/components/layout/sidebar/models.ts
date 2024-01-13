export interface SidebarItem {
    label: string; // should be unique
    iconClass: string;
    routerLink?: string | string[]; // router link
    queryParams?: any; // queryParams router link
    action?: () => void; // action to trigger
    translate?: string; // if provided, use transloco pipe
    badge?: any; // badge to be displayed, if not observable, turns into string
    children?: SidebarItem[];
}
