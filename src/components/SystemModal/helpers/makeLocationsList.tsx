import { ListOption } from '../../../models/ListOption';
import { ReactComponent as HardDriveIcon } from '../../../assets/icons/SystemModal/hard_drive.svg';

export const makeLocationsList = (): ListOption<string>[] => [
  {
    label: 'Macintosh HD',
    value: 'macintosh_hd',
    icon: <HardDriveIcon />,
  },
  {
    label: 'Guest HD',
    value: 'guest_hd',
    icon: <HardDriveIcon />,
  },
];
