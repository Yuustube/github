#include <iostream>
using namespace std;
int lengthOfIntervalIntersection(int a, int b, int c, int d);
int main(void)
{
int t;
int a, b, c, d;
    cin >> t;
    for(int i=0; i<t; i++)
{
        cin >> a >> b >> c >> d;
        cout << lengthOfIntervalIntersection( a, b, c, d ) << endl;
    }
    return 0;
}
int lengthOfIntervalIntersection(int a, int b, int c, int d)
{
    int counta[b - a + 1];
    int countb[d - c + 1];
    for(int i = 0; i < b - a; i++){
        counta[i] = a + i;
    }
    for(int j = 0; j < d - c; j++){
        countb[j] = c + 1;
    }

    int count = 0;
    for(int k = 0; k < sizeof(counta); k++){
        for(int l = 0; l < sizeof(countb); l++){
            if(counta[k] == countb[l]){
                count++;
            }
        }
    }
    return count;
}
