import { ListOption } from '../../../models/ListOption';
import { ReactComponent as CloudIcon } from '../../../assets/icons/SystemModal/cloud.svg';
import { ReactComponent as SharedIcon } from '../../../assets/icons/SystemModal/shared.svg';

export const makeICloudList = (): ListOption<string>[] => [
  {
    label: 'ICloud Drive',
    value: 'icloud_drive',
    icon: <CloudIcon />,
  },
  {
    label: 'Shared',
    value: 'shared',
    icon: <SharedIcon />,
  },
];
