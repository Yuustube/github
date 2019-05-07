#include <iostream>
using namespace std;
int main(void)
{
	int t;
	const int cap = 1000;
	cin >> t;
	for (int u = 0; u < t; u++)
	{
		int num = 0;
		int num2 = 0;
		cin >> num;
		cin >> num2;
		int answer = 0;
		int counts;
		int *bac;
		bac = new int[cap];
		
		for (int l = 0; l < num; l++) {
			cin >> counts;
			bac[l] = counts;
		}

		int *count;
		count = new int[cap];
		for (int m = 0; m < num; m++) {
			count[m] = bac[m];
		}
		for (int h = 0; h < num2; h++) {
			for (int g = 0; g < num; g++) {
					bac[g] = count[g];
				}
			for (int i = 0; i < num; i++) {
				if (i == 0) {
					if (bac[1] < 3) {
						if (bac[i] == 0) {
							continue;
						}
						else {
							count[i] = bac[i] - 1;
						}
					}
					else if (bac[1] > 7) {
						if (bac[i] == 0) {
							continue;
						}
						else {
							count[i] = bac[i] - 1;
						}
					}
					else if (bac[1] >= 4 && bac[1] <= 7) {
						if (bac[i] == 9) {
							continue;
						}
						else {
							count[i] = bac[i] + 1;
						}
					}

				}
				else if (i == num - 1) {
					if (bac[num - 2] < 3) {
						if (bac[i] == 0) {
							continue;
						}
						else {
							count[i] = bac[i] - 1;
						}
					}
					else if (bac[num - 2] > 7) {
						if (bac[i] == 0) {
							continue;
						}
						else {
							count[i] = bac[i] - 1;
						}
					}
					else if (bac[num - 2] >= 4 && bac[num - 2] <= 7) {
						if (bac[i] == 9) {
							continue;
						}
						else {
							count[i] = bac[i] + 1;
						}
					}
				}
				else if (i > 0 && i < num - 1) {
					if (bac[i - 1] + bac[i + 1] < 3) {
						if (bac[i] == 0) {
							continue;
						}
						else {
							count[i] = bac[i] - 1;
						}
					}
					else if (bac[i - 1] + bac[i + 1] > 7) {
						if (bac[i] == 0) {
							continue;
						}
						else {
							count[i] = bac[i] - 1;
							
						}
					}
					else if (bac[i - 1] + bac[i + 1] >= 4 && bac[i - 1] + bac[i + 1] <= 7) {
						if (bac[i] == 9) {
							continue;
						}
						else {
							count[i] = bac[i] + 1;
						}
					}
				}
			}
		}
		for (int j = 0; j < num; j++) {
			cout << count[j] << " ";
		}
		cout << endl;

	}
}
