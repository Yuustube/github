#include <iostream>
using namespace std;

int mode;
void message()
{
    cout << "���� ���� ���� message()" << endl;
}

namespace Graphics {
    int mode;
    int x,y;
    void draw() { cout << "Graphics �̸� ���� ���� draw()" << endl;};
    void message(){ cout << "Graphics �̸� ���� ���� message()" << endl;};

}
