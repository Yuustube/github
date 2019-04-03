/*#include <iostream>
using namespace std;

int main(void)
{
    int t;
    int n;
    cin >> t;

    for(int i = 0; i < t; i++){
            cin >> n;
        for(int j = 0; j < 9; j++){
            if(n % 10 != 0){
                cout << n % 10;
            }
            n = n / 10;
        }
        cout << endl;
    }

    return 0;

}

*/


#include <iostream>
using namespace std;

int main(void)
{
    int t;
    int n;
    int k;
    int maxi = 0;
    int sum = 0;
    int num = 0;
    cin >> t;
    cin >> n;
    int a[n];
    for(int i = 0; i < t; i++){
        for(int j = 0; j < n; j++){
            cin >> k;
            a[j] = k;
        }
        for(int k = 0; k < n; k++){
            if(a[k] > maxi){
                maxi = a[k];
                num = k;
            }
        }
        for(int m = 0; m < n; m++){
            if(num != m){
                sum = sum + a[m];
            }

        }
        if(maxi > sum){
            cout << num +1 << endl;
        }
        else{
            cout << 0 << endl;
        }
    }
    return 0;

}
