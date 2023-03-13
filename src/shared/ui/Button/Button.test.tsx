import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';

describe('ui Button', () => {
  test('render test', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Clear theme test', () => {
    render(<Button theme={ButtonThemeEnum.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
