#include<iostream>
#include<fstream>
#include<ctime>
#include<cstdlib>
#include<vector>
#include<string>
#include<cmath>
#include<algorithm>
using std::string;
using std::cout;
using std::cin;
using std::endl;
using std::vector;
using std::fstream;

void DEAlgorithm();
bool nodeTable[4][2];
std::vector<string>pathTable;
std::string path = "";
double globalFitness = 0;
double tempFitness = 0;
const double K = 10;	
const double EPSILON = 0.01;
const int POPNUM = 50;
const int MCN = 100000;
const double PC = 0.2;
	const double F = 0.5;
const int RUN = 30;
int cycle[RUN] = { 0 };
double coverage[RUN] = { 0 };	
double runTime[RUN] = { 0 };
int caseNum[RUN] = { 0 };
const int NODENUM = 4;
const int PATHNUM = 5;
const int R =3;

bool func0TF(double para0)
{tempFitness=1/(((para0<0)?0:(para0+K))+EPSILON);
return (para0<0);}
bool func0FT(double para0)
{tempFitness=1/(((para0<=0)?0:(para0+K))+EPSILON);
return !((para0<=0));}
bool func0TT(double para0)
{tempFitness=0;
return (para0<0);}
bool func0FF(double para0)
{tempFitness=1/EPSILON;
return (para0<0);}

bool func3TF(double para0)
{tempFitness=1/(((para0<0)?0:(para0+K))+EPSILON);
return (para0<0);}
bool func3FT(double para0)
{tempFitness=1/(((para0<=0)?0:(para0+K))+EPSILON);
return !((para0<=0));}
bool func3TT(double para0)
{tempFitness=0;
return (para0<0);}
bool func3FF(double para0)
{tempFitness=1/EPSILON;
return (para0<0);}

int test_function(int a, double b, int c)
{path += "0";

    if(
nodeTable[0][0]?(nodeTable[0][1]?func0TT((10)-(b)):func0FT((b)-(10))):(nodeTable[0][1]?func0TF((10)-(b)):func0FF((10)-(b))))
    {	globalFitness += tempFitness;tempFitness = 0; 
nodeTable[0][0] = true;
path += "-1";

            switch()
    {
        case 0:
nodeTable[1][0]?(nodeTable[1][1]?func1TT((a)-(0)):func1FT((a)-(0))):(nodeTable[1][1]?func1TF((a)-(0)):func1FF((a)-(0)));
	globalFitness += tempFitness;tempFitness = 0; 
nodeTable[1][0] = true;
path += "-2";

            //googd
            break;
        case 1:
nodeTable[1][0]?(nodeTable[1][1]?func1TT((a)-(0)):func1FT((a)-(0))):(nodeTable[1][1]?func1TF((a)-(0)):func1FF((a)-(0)));
	globalFitness += tempFitness;tempFitness = 0; 
nodeTable[1][1] = true;
nodeTable[2][0]?(nodeTable[2][1]?func2TT((a)-(1)):func2FT((a)-(1))):(nodeTable[2][1]?func2TF((a)-(1)):func2FF((a)-(1)));
	globalFitness += tempFitness;tempFitness = 0; 
nodeTable[2][0] = true;
path += "-3";

            //good 
            break;
        default:nodeTable[1][0]?(nodeTable[1][1]?func1TT((a)-(0)):func1FT((a)-(0))):(nodeTable[1][1]?func1TF((a)-(0)):func1FF((a)-(0)));
	globalFitness += tempFitness;tempFitness = 0; 
nodeTable[1][1] = true;
nodeTable[2][0]?(nodeTable[2][1]?func2TT((a)-(1)):func2FT((a)-(1))):(nodeTable[2][1]?func2TF((a)-(1)):func2FF((a)-(1)));
	globalFitness += tempFitness;tempFitness = 0; 
nodeTable[2][1] = true;
path += "-4";

            break;
    }path += "-5";

    }
    else
    {
	globalFitness += tempFitness;tempFitness = 0; 
nodeTable[0][1] = true;
path += "-6";

        if(
nodeTable[3][0]?(nodeTable[3][1]?func3TT((10)-(c)):func3FT((c)-(10))):(nodeTable[3][1]?func3TF((10)-(c)):func3FF((10)-(c))))
        {	globalFitness += tempFitness;tempFitness = 0; 
nodeTable[3][0] = true;
path += "-7";
}
        else
        {
	globalFitness += tempFitness;tempFitness = 0; 
nodeTable[3][1] = true;
path += "-8";
}path += "-9";

    }path += "-10";


        
}

int main(int argc, char* argv[]){ DEAlgorithm();}
