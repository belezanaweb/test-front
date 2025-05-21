import clsx from 'clsx';
import './tab-item.css';

export const TabItem = ({ label, isCurrentTab, onClick }: { label: string, isCurrentTab?: boolean, onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={clsx('stepItem', { active: isCurrentTab })}
    >
      {label}
    </button>

  );
};
