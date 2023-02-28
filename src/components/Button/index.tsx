import classNames from 'classnames';
import { ButtonVariants, ButtonSizes } from '@/ts';

interface ButtonProps {
  content: string | JSX.Element;
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

const Button: React.FC<ButtonProps> = ({ content, size, variant = 'primary' }) => {
  const classes = classNames(`btn btn-${variant}`, {
    'btn-sm': size === 'md',
    'btn-lg': size === 'lg',
  });

  return (
    <div className='d-grid col-2'>
      <button
        className={classes}
        type='button'
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
