#include <iostream>
using namespace std;

int mode;
void message()
{
    cout << "전역 공간 안의 message()" << endl;
}

namespace Graphics {
    int mode;
    int x,y;
    void draw() { cout << "Graphics 이름 공간 안의 draw()" << endl;};
    void message(){ cout << "Graphics 이름 공간 안의 message()" << endl;};

}
