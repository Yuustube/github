#include <iostream>
using namespace std;
void outputZigZag(int n, int k);
int main(void)
{
int t;
int n, k;
    cin >> t;
    for(int i=0; i<t; i++)
{
        cin >> n >> k;
        outputZigZag( n, k );
    }
    return 0;
}
void outputZigZag(int n, int k)
{
    if(n % 2 != 0){
    cout << k;
            int m = k;
        for(int j = 1; j < k; j++){
            cout << "*" << m + (n-j);
            m = m + (n-j);


        }
        cout << endl;
}
    else{
        cout << k;
            int m = k;
        for(int j = 1; j < k; j++){
            cout << "*" << m + (n-j);
            m = m + (n-j);

        }
    }
        cout << endl;
}
