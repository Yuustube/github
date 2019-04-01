#include <iostream>
#include <cmath>
using namespace std;
int closestNumber(int n, int m);
int main(void)
{
int t;
int n, m;
    cin >> t;
    for(int i=0; i<t; i++)
{
        cin >> n >> m;
        cout << closestNumber( n, m ) << endl;
    }
    return 0;
}
int closestNumber(int n, int m)
{
    int count1 = 0;
    int count2 = m;
    if(n % m == 0){
        return n;
        cout << endl;
    }
    else if(n > 0){
        for(int i = n - m; i < n + m + 1; i++){
            if(i % m == 0 && abs(i - n) <= abs(count2)){
                count1 = i;
                count2 = abs(i - n);
            }
        }
       return count1;
    }

    else if(n < 0){
        for(int i = n + m; i < n - m; i++){
            if(i % m == 0 && abs(i - n) < abs(count2));
                count1 = i;
                count2 = abs(i - n);
        }
        return count1;
    }


}
