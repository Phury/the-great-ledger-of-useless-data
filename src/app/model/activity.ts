/*
recipe: weight
amount: 81k
date: (default to today)

recipe: food
date: (default to today)

recipe: suburi
amount: 200
date
*/

export interface Activity {
	recipe: string;
	description?: string;
	amount?: string;
	date?: Date;
}