export interface WorkoutTemplate {
	userId: string;
	name: string;
	createdBy: string;
	exercises: [
		exerciseName: string,
		muscleGroup: string
	]
}
