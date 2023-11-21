class Circle {
    public readonly name: string
    public readonly color: string
    public constructor(color: string, name: string) {
        this.color = color
        this.name = name
    }
    
    public calculateArea(): number {
        return 1
    }
}

class Restangle extends Circle {
   
    public calculateArea(): number {
         return 1
    }
   public print(): string { return '' }
}   

class Square extends Restangle {
   
    public calculateArea(): number {  return 1}
    public print(): string { return 'A*B' }
}

class Triangle extends Circle {
   
    public calculateArea (): number { return 1}
}

