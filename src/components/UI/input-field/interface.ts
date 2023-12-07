export interface ISignIn {
	hint: string;
	type: string;
	list?: string,
	onChange?: (e: string) => void;
}