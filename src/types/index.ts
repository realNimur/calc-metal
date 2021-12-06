export type PaymentsItem = {
    code: string;
    title: string
}
export type FinenessItem = {
    id: number;
    value: number;
    cash: number;
    checkingAccount: number;
}
export type MetalItem = {
    code: string;
    title: string
    finenessList: FinenessItem[]
}
export type orderParams = {
    [key: string]: string | null | number | { value: number; price: [number, number] };
    metalCode: string;
    paymentCode: number | null;
    weight: string;
    fineness: {
        value: number;
        price: [number, number];
    }
}
export type TState = {
    payments: PaymentsItem[];
    metals: MetalItem[];
    order: orderParams,
    showList: string
}

export type TagsParam = {
    code: string;
    title: string;
}

export type itemInfo = {
    code?: string;
    title?: string;
    cash?: number;
    checkingAccount?: number;
    id?: number;
    value?: number;
};