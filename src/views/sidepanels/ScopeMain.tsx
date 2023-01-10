import React, {FC} from 'react';

import {v4 as uuid} from 'uuid';
import {useTranslation} from 'react-i18next';

import useColorRamp from '@geomatico/geocomponents/hooks/useColorRamp';

import {HEXColor, UUID} from '../../types/commonTypes';
import {useScopes} from '../../hooks/useStoredCollections';
import MainPanel from '../../components/scope/MainPanel';
import ScopeFeatures from './ScopeFeatures';

export interface ScopeMainProps {
  selectedScope?: UUID,
  onScopeSelected: (scopeId: UUID) => void,
  selectedPoint?: UUID,
  onPointSelected: (scopeId?: UUID) => void,
  selectedTrack?: UUID,
  onTrackSelected: (scopeId?: UUID) => void
}

const ScopeMain: FC<ScopeMainProps> = ({
  selectedScope,
  onScopeSelected,
  selectedPoint,
  onPointSelected,
  selectedTrack,
  onTrackSelected
}) => {
  const {t} = useTranslation();
  const {hexColors: palette} = useColorRamp('BrewerDark27');

  const scopeStore = useScopes();
  const unselectScope = () => onScopeSelected('');

  const scopeAdd = () => {
    scopeStore.create({
      id: uuid(),
      name: `${t('scope')} ${scopeStore.list().length + 1}`,
      color: palette[scopeStore.list().length % palette.length]
    });
  };

  const scopeColorChange = (scopeId: UUID, newColor: HEXColor) => {
    const existing = scopeStore.retrieve(scopeId);
    existing && scopeStore.update({
      ...existing,
      color: newColor
    });
  };

  const scopeRename = (scopeId: UUID, newName: string) => {
    const existing = scopeStore.retrieve(scopeId);
    existing && scopeStore.update({
      ...existing,
      name: newName
    });
  };

  const scopeDelete = (scopeId: UUID) => {
    const existing = scopeStore.retrieve(scopeId);
    existing && scopeStore.delete(scopeId);
  };

  const share = (scopeId: UUID) => {
    console.log('Unimplemented Share, Scope', scopeId); // TODO
  };

  const instamaps = (scopeId: UUID) => {
    console.log('Unimplemented Instamaps, Scope', scopeId); // TODO
  };

  const dataSchema = (id: UUID) => {
    console.log('Unimplemented Data Schema, Scope', id); // TODO
  };

  return !selectedScope ?
    <MainPanel
      scopes={scopeStore.list()}
      onSelect={onScopeSelected}
      onAdd={scopeAdd}
      onColorChange={scopeColorChange}
      onRename={scopeRename}
      onDelete={scopeDelete}
      onShare={share}
      onInstamaps={instamaps}
      onDataSchema={dataSchema}
    />
    :
    <ScopeFeatures
      scopeId={selectedScope}
      onClose={unselectScope}
      selectedPoint={selectedPoint}
      onPointSelected={onPointSelected}
      selectedTrack={selectedTrack}
      onTrackSelected={onTrackSelected}
    />;
};

export default ScopeMain;
