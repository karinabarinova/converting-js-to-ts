import { format } from 'date-fns';

/**
 * Format a timestamp as a string
 * @param date
 */
export function formatTimestamp ( date: Date | string | number ): string
{
  if ( date instanceof Date )
  {
    return format( date, 'MMM dd, yyyy HH:MM:SS a' );
  } else
  {
    const newDate: Date = new Date( date )
    return format( newDate, 'MMM dd, yyyy HH:MM:SS a' );
  }
}
