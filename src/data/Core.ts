export default class Core {
	readonly id: string;
	readonly name: string;

	constructor(args: { id: string; name: string; }) {
		const { id, name } = args;
		this.id = id;
		this.name = name;
	}
}