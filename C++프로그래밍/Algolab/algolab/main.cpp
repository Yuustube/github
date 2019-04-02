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
    if(k % 2 != 0){
        int a = k;
        cout << a;
    for(int i = 0; i < k-1; i++){
        cout << "*" << a + 1;
        a++;
        }
        cout << endl;
    }
    else{
        int a = k+k;
        cout << a;
    for(int i = k; i > 1; --i){
        cout << "*" << a - 1;
        --a;
        }
        cout << endl;
    }
}

