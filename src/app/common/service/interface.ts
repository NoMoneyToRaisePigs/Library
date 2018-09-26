export class SideMenu{
    id: string;
    name: string;
    items: SubMenuItem[];
    expanded: boolean;
}

export class SubMenuItem{
    id: string;
    name: string;
}