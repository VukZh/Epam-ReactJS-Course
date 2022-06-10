export type ButtonProps = {
    text: string;
    purpose: 'add' | 'search' | 'error';
    onClick(): void;
};