import classNames from 'classnames';
import { ButtonVariants, ButtonSizes } from '@/ts';
import Image from 'next/image';

interface ButtonProps {
  content: string | JSX.Element;
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

const Button: React.FC<ButtonProps> = ({ content, size, variant = 'primary' }) => {
  const classes = classNames(`btn btn-${variant} font-georgia`, {
    'btn-sm': size === 'md',
    'btn-lg': size === 'lg',
    'text-white': !['white', 'code'].includes(variant)
  });

  return (
    <div className='d-grid'>
      <button
        className={classes}
        type='button'
      >
        {content}
        {variant === 'code' && (
          <span className='ms-1'>
            <Image
              src='/icons/copy.svg'
              alt='me'
              width='18'
              height='23'
            />
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
