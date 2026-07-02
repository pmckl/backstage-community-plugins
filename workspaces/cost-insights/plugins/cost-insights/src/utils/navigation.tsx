/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  RiMoneyDollarCircleLine,
  RiFireLine,
  RiSettingsLine,
  RiNodeTree,
  RiDatabase2Line,
  RiSearchLine,
  RiCloudLine,
  RiGraduationCapLine,
  RiListCheck,
} from '@remixicon/react';
import { IconType } from '../types';

export enum DefaultNavigation {
  CostOverviewCard = 'cost-overview-card',
  AlertInsightsHeader = 'alert-insights-header',
}

export type NavigationItem = {
  navigation: string;
  icon: JSX.Element;
  title: string;
};

export const getDefaultNavigationItems = (alerts: number): NavigationItem[] => {
  const items = [
    {
      navigation: DefaultNavigation.CostOverviewCard,
      icon: <RiMoneyDollarCircleLine />,
      title: 'Cost Overview',
    },
  ];
  if (alerts > 0) {
    items.push({
      navigation: DefaultNavigation.AlertInsightsHeader,
      icon: <RiFireLine />,
      title: 'Action Items',
    });
  }
  return items;
};

export function getIcon(icon?: string): JSX.Element {
  switch (icon) {
    case IconType.Compute:
      return <RiSettingsLine />;
    case IconType.Data:
      return <RiNodeTree />;
    case IconType.Database:
      return <RiListCheck />;
    case IconType.Storage:
      return <RiDatabase2Line />;
    case IconType.Search:
      return <RiSearchLine />;
    case IconType.ML:
      return <RiGraduationCapLine />;
    default:
      return <RiCloudLine />;
  }
}
