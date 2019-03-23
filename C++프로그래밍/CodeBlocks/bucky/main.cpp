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

int main()
{
    cinAndout();
    Anything anythingObject;
    anythingObject.coolSaying();
    return 0;
}

int cinAndout(){
    int x;
    cout << "#1 cinAndout (type number) : ";
    cin >> x;
    cout << "cinAndout = "<< x << endl <<endl;
}
