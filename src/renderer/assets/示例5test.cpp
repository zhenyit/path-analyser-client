int function(int a, int b, int c)
{
    bool isTriangle;
    if( (a<(b+c)) && (b< (a+c)) && (c<(a+b)))
    {
        isTriangle = true;
    }
    else
    {
       isTriangle = false;
    }
    if(isTriangle)
    {
        if((a == b || b == c || a == c ) && (a!=b)&& (b!= c))
        {
            
        }
        if( a==b && b==c)
        {
            
        }
        if( a != b && a!=c && b!=c )
        {
            
        }
    }
    else
    {
        
    }
    return 0;
}