import { JSX, useEffect } from 'react';
import { BookingFormValue } from '@features/booking-form/model';
import { useForm } from 'react-hook-form';
import { TextInput } from '@shared/ui/text-input';
import { INITIAL_FORM_VALUE } from '@features/booking-form/config';
import { CustomCheckbox } from '@shared/ui/custom-checkbox';
import { createValidationSchema } from '@features/booking-form/config';
import { BookingDate, QuestBookingInfo } from '@entities/booking';
import { QuestExtended } from '@entities/quest';
import { yupResolver } from '@hookform/resolvers/yup';
import { QuestTimeSlots } from '../quest-time-slots';
import { TimeSlot } from '../time-slot';
import { createNewBooking } from '@features/booking-form/lib/create-new-booking';

type BookingFormProps = {
  booking: QuestBookingInfo;
  quest: QuestExtended;
}

export function BookingForm({ booking, quest }: BookingFormProps): JSX.Element {
  const validationSchema = createValidationSchema(
    Math.min(...quest.peopleMinMax),
    Math.max(...quest.peopleMinMax)
  );
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    resetField,
  } = useForm<BookingFormValue>({
    defaultValues: INITIAL_FORM_VALUE,
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  });

  useEffect(
    () => {
      let componentIsRendered = false;

      if (!componentIsRendered) {
        resetField('date');
      }

      return () => {
        componentIsRendered = true;
      };
    },
    [quest.id, resetField]
  );

  const formSubmitHandler = (data: BookingFormValue): void => {
    console.log(createNewBooking(booking.id, data));
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className='booking-form' onSubmit={handleSubmit(formSubmitHandler)}>
      <fieldset className='booking-form__section'>
        <legend className='visually-hidden'>Выбор даты и времени</legend>
        {!!booking.slots[BookingDate.Today]?.length && (
          <QuestTimeSlots
            slots={booking.slots[BookingDate.Today]}
            date={BookingDate.Today}
            renderSlot={(value, description, isAvailable) => (
              <TimeSlot
                key={value}
                description={description}
                isAvailable={isAvailable}
                value={value}
                {...register('date')}
              />
            )}
          />
        )}
        {!!booking.slots[BookingDate.Tomorrow]?.length && (
          <QuestTimeSlots
            slots={booking.slots[BookingDate.Tomorrow]}
            date={BookingDate.Tomorrow}
            renderSlot={(value, description, isAvailable) => (
              <TimeSlot
                key={value}
                description={description}
                isAvailable={isAvailable}
                value={value}
                {...register('date')}
              />
            )}
          />
        )}
      </fieldset>
      <fieldset className='booking-form__section'>
        <legend className='visually-hidden'>Контактная информация</legend>
        <TextInput
          type='text'
          caption='Ваше имя'
          placeholder='Имя'
          className='booking-form__input'
          hasError={!!errors?.personName?.message}
          {...register('personName')}
        >
          {!!errors?.personName?.message && <span role='alert' className='error__message'>{errors.personName.message}</span>}
        </TextInput>
        <TextInput
          type='tel'
          caption='Контактный телефон'
          placeholder='Телефон'
          className='booking-form__input'
          hasError={!!errors?.personPhone?.message}
          {...register('personPhone')}
        >
          {!!errors?.personPhone?.message && <span role='alert' className='error__message'>{errors.personPhone.message}</span>}
        </TextInput>
        <TextInput
          type='number'
          caption='Количество участников'
          placeholder='Количество участников'
          className='booking-form__input'
          hasError={!!errors?.gamersCount?.message}
          {...register('gamersCount', {
            setValueAs: (value) => Number.isNaN(value) ? Number.parseInt(String(value), 10) : null
          })}
        >
          {!!errors?.gamersCount?.message && <span role='alert' className='error__message'>{errors.gamersCount.message}</span>}
        </TextInput>
        <CustomCheckbox
          id='children'
          className='booking-form__checkbox booking-form__checkbox--children'
          hasError={!!errors?.hasChildren?.message}
          {...register('hasChildren')}
        >
          <>
            <span className='custom-checkbox__label'>Со&nbsp;мной будут дети</span>
            {!!errors?.hasChildren?.message && <span role='alert' className='error__message'>{errors.hasChildren.message}</span>}
          </>
        </CustomCheckbox>
      </fieldset>
      <button
        className='btn btn--accent btn--cta booking-form__submit'
        type='submit'
        disabled={!isValid}
      >
        Забронировать
      </button>
      <CustomCheckbox
        id='id-order-agreement'
        hasError={!!errors?.personalAgreementConfirm?.message}
        className='booking-form__checkbox booking-form__checkbox--agreement'
        {...register('personalAgreementConfirm')}
      >
        <>
          <span className='custom-checkbox__label'>
            Я&nbsp;согласен с <a className='link link--active-silver link--underlined' href='#'>правилами обработки персональных данных</a>
            &nbsp;и пользовательским соглашением
          </span>
          {!!errors?.personalAgreementConfirm?.message && <span role='alert' className='error__message'>{errors.personalAgreementConfirm.message}</span>}
        </>
      </CustomCheckbox>
    </form>
  );
}
