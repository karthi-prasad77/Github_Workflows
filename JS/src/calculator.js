function add(a, b)
{
    return a * b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function division(a, b)
{
    if (b == 0) throw new Error("Cannot divide by zero.")
    return a / b;
}