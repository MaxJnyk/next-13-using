import { ButtonHTMLAttributes, FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'active:scale-90 inline-flex items-center justify-center rounded-md shadow-sm text-sm font-medium transition-color focus:outline-none focus:right-2 focus:right-slate-400f focus:right-offset-2 disabled:opacity-50 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default: 'bg-slate-900 hover:bg-slate-800 text-white',
				ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
			},
			size: {
				default: 'h-10 py-2 px-4',
				sm: 'h-9 px-2 ',
				lg: 'h-11 px-8',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		}
	}
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	isLoading?: boolean
}

const Button: FC<ButtonProps> = ({className, children, variant, isLoading, size, ...props}: ButtonProps) => {
	return <button
		{...props}
		disabled={isLoading}
		className={cn(buttonVariants({variant, size, className}))}
	>
		{isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin'/> : null}
		{children}
	</button>
}

export default Button
