#include <iostream>
using namespace std;
int findingzero(int a);
int main(void)
{
int t;
int a;
    cin >> t;
    for(int i=0; i<t; i++)
{
        cin >> a;
        cout << findingzero(a) << endl;
    }
    return 0;
}
int findingzero(int a)
{
    int cnt = 0;
    int count2 = 0;
    int input = 0;
    for(int i = 0; i < a; i++){
        cin >> input;

        for(int i=1 ; i<=1000; i++)
    {
        if(i%5 == 0)cnt++;
        if(i%25 == 0)cnt++;
        if(i%125 == 0)cnt++;
        else{
            break;
        }
    }


    return cnt;
}
}
