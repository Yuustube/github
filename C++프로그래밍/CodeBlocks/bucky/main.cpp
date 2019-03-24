#include <iostream> //pre-processor directive

using namespace std; //std = standard library

void something(); //prototyping

//void means return nothing

class Anything{  //declaring class
     public:  //access specifier
	void coolSaying(){
	     cout<< "#2 class Anything, coolSaying : hello Kappa" << endl;
	}
};

int cinAndout();
int question();

int main()
{
    cinAndout();
    Anything anythingObject;
    anythingObject.coolSaying();
    question();
    return 0;
}

int cinAndout(){
    int x;
    cout << "#1 cinAndout (type number) : ";
    cin >> x;
    cout << "cinAndout = "<< x << endl <<endl;
}

int question(){
    int exp1 = 1;
    int exp2 = 2;
    int exp3 = 3;

    exp1 ? exp2 : exp3;
    // if exp1 == true, return exp2 else exp3

}
