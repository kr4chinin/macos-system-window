import { ReactComponent as ClockIcon } from '../../../assets/icons/SystemModal/clock.svg';
import { ReactComponent as DesktopIcon } from '../../../assets/icons/SystemModal/desktop.svg';
import { ReactComponent as DocumentsIcon } from '../../../assets/icons/SystemModal/documents.svg';
import { ReactComponent as DownloadsIcon } from '../../../assets/icons/SystemModal/downloads.svg';
import { ListOption } from '../../../models/ListOption';

export const makeFavoritesList = (): ListOption<string>[] => [
  {
    label: 'First desktop',
    value: 'first_desktop',
    icon: <DesktopIcon />,
  },
  {
    label: 'Second desktop',
    value: 'second_desktop',
    icon: <DesktopIcon />,
  },
  {
    label: 'Recents',
    value: 'recents',
    icon: <ClockIcon />,
  },
  {
    label: 'Documents',
    value: 'documents',
    icon: <DocumentsIcon />,
  },
  {
    label: 'Downloads',
    value: 'downloads',
    icon: <DownloadsIcon />,
  },
];
