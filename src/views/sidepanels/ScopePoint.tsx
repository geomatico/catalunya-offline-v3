import React, {FC, useCallback} from 'react';

import {ScopePoint, UUID} from '../../types/commonTypes';
import {useScopeTracks, useScopePoints, useScopes} from '../../hooks/usePersistedCollections';
import PointPanel from '../../components/scope/PointPanel';
import usePointNavigation from '../../hooks/singleton/usePointNavigation';

export interface ScopePointProps {
  scopeId: UUID,
  pointId: UUID,
  isEditing: boolean,
  onEditing: (isEditing: boolean) => void,
  onClose: () => void
}

const ScopePoint: FC<ScopePointProps> = ({
  scopeId,
  pointId,
  isEditing,
  onEditing,
  onClose
}) => {
  const scopeStore = useScopes();
  const trackStore = useScopeTracks(scopeId);
  const pointStore = useScopePoints(scopeId);
  const pointNavigation = usePointNavigation();

  const selectedScope = scopeStore.retrieve(scopeId);
  const selectedPoint = pointStore.retrieve(pointId);
  const numPoints = pointStore.list()?.length ?? 0;
  const numTracks = trackStore.list()?.length ?? 0;

  const handlePointChange = useCallback((point: ScopePoint) => {
    pointStore.update(point);
  }, [pointStore]);

  const goTo = useCallback((pointId: UUID) => {
    pointNavigation.start(scopeId, pointId);
  }, [pointNavigation.start, scopeId]);

  return selectedScope && selectedPoint ? <PointPanel
    scope={selectedScope}
    point={selectedPoint}
    numPoints={numPoints}
    numTracks={numTracks}
    isEditing={isEditing}
    onEditing={onEditing}
    onBackButtonClick={onClose}
    onPointChange={handlePointChange}
    onGoTo={goTo}
  /> : null;
};

export default ScopePoint;
