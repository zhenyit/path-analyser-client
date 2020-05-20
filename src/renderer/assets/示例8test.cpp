int Factorial(int input)
{
	if (input <= 0 || input > 10) {
		}
	if (input == 1)
		return 1;
	return Factorial(input - 1) * input;
}
