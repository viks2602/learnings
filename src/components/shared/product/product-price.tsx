import { cn } from "@/lib/utils"; // this is used for use of dynamic classes
const ProductPrice = ({value, className}:{value:number ; className?:string}) => {
    // ensure two decimal places
    const stringValue = value.toFixed(2);
    // Get int and decimal parts
    const [int, dec] = stringValue.split('.');
  return (
   <p className={cn('text-2xl',className)}>
    <span className="text-xs align-super">$</span>
    {int}
    <span className="text-xs align-super">.{dec}</span>

   </p>
  )
}

export default ProductPrice