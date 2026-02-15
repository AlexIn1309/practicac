using System;

class Suma
{
    static void Main(String[] args)
    {
      int numero1 = 0;
      int numero2 = 0;
      Console.WriteLine("Ingresa un numero" );
      int.TryParse(Console.ReadLine(), out numero1);
      Console.WriteLine("Ingresa un numero" );
      int.TryParse(Console.ReadLine(), out numero2);
      int suma = numero1 + numero2;
        Console.WriteLine("Suma " + numero1 +" + " + numero2 +" = " + suma);
    }
}
