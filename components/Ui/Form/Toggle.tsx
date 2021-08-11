import { ReactElement, useState } from 'react';
import { Switch } from '@headlessui/react';
import cs from 'classnames';

type ToggleProps = {
  switchColors?: boolean;
  defaultChecked: boolean;
  label: string | ReactElement;
  onChange?: (value: boolean) => void;
};

export function Toggle({
  label,
  switchColors,
  defaultChecked,
  onChange,
}: ToggleProps) {
  const [enabled, setEnabled] = useState(defaultChecked || false);
  const switchActive = (enabled && !switchColors) || (switchColors && !enabled);

  return (
    <Switch.Group>
      <div className='flex items-center'>
        <Switch
          defaultChecked={defaultChecked}
          checked={enabled}
          onChange={(value) => {
            setEnabled(value);
            if (onChange) {
              onChange(value);
            }
          }}
          className={cs(
            { 'bg-accent-green': switchActive, 'bg-accent-red': !switchActive },
            'relative inline-flex items-center h-6 rounded-full w-11 mr-4',
          )}>
          <span
            className={cs(
              'inline-block w-4 h-4 transform-all duration-300 bg-white rounded-full',
              {
                'translate-x-6': switchActive,
                'translate-x-1': !switchActive,
              },
            )}
          />
        </Switch>
        <Switch.Label className='mr-4 cursor-pointer'>{label}</Switch.Label>
      </div>
    </Switch.Group>
  );
}
