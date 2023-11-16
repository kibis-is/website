import clsx from 'clsx';
import React, { FC } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

// components
import CarouselButton from './CarouselButton';

// styles
import styles from './styles.module.scss';

// types
import { ICarouselItemProps } from './types';

interface IProps {
  items: ICarouselItemProps[];
}

const Carousel: FC<IProps> = ({ items }: IProps) => {
  return (
    <ReactResponsiveCarousel
      renderArrowNext={(
        onClickHandler: () => void,
        hasNext: boolean,
        label: string
      ) => {
        if (hasNext) {
          return (
            <CarouselButton
              Icon={PiCaretRightBold}
              isPrev={false}
              onClick={onClickHandler}
              label={label}
            />
          );
        }

        return null;
      }}
      renderArrowPrev={(
        onClickHandler: () => void,
        hasPrev: boolean,
        label: string
      ) => {
        if (hasPrev) {
          return (
            <CarouselButton
              Icon={PiCaretLeftBold}
              isPrev={true}
              onClick={onClickHandler}
              label={label}
            />
          );
        }

        return null;
      }}
      renderIndicator={(onClickHandler, isSelected, index) => {
        const key: string = `carousel-indicator-item-${index}`;

        if (isSelected) {
          return (
            <li
              aria-label={items[index].label}
              className={clsx(styles.indicator, styles['indicator--selected'])}
              key={key}
              title={items[index].label}
            />
          );
        }

        return (
          <li
            aria-label={items[index].label}
            className={styles.indicator}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            key={key}
            role="button"
            tabIndex={0}
            title={items[index].label}
            value={index}
          />
        );
      }}
      showStatus={false}
      useKeyboardArrows={true}
    >
      {items.map(({ children }) => children)}
    </ReactResponsiveCarousel>
  );
};

export default Carousel;
