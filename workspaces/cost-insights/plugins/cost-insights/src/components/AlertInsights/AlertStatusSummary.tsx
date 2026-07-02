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

import { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import { RiCheckLine, RiDeleteBinLine, RiTimeLine } from '@remixicon/react';
import { ActionItemCard } from '../ActionItems';
import { AlertItem, AlertStatus } from '../../types';
import { useActionItemCardStyles as useStyles } from '../../utils/styles';

type AlertGroupProps = {
  alerts: AlertItem[];
  status: AlertStatus;
  title: string;
  icon: JSX.Element;
};

const AlertGroup = ({ alerts, status, title, icon }: AlertGroupProps) => {
  const classes = useStyles();
  return (
    <Box p={1}>
      {alerts.map((alert, index) => (
        <Fragment key={`alert-${status}-${index}`}>
          <ActionItemCard
            disableScroll
            alert={alert}
            avatar={
              <Tooltip title={title}>
                <Avatar className={classes.avatar}>{icon}</Avatar>
              </Tooltip>
            }
          />
          {index < alerts.length - 1 && <Divider />}
        </Fragment>
      ))}
    </Box>
  );
};

type AlertStatusSummaryProps = {
  open: boolean;
  snoozed: AlertItem[];
  accepted: AlertItem[];
  dismissed: AlertItem[];
};

export const AlertStatusSummary = ({
  open,
  snoozed,
  accepted,
  dismissed,
}: AlertStatusSummaryProps) => {
  const isSnoozedListDisplayed = !!snoozed.length;
  const isAcceptedListDisplayed = !!accepted.length;
  const isDismissedListDisplayed = !!dismissed.length;

  return (
    <Collapse in={open}>
      {isAcceptedListDisplayed && (
        <AlertGroup
          title="Accepted"
          alerts={accepted}
          status={AlertStatus.Accepted}
          icon={
            <RiCheckLine
              role="img"
              aria-hidden={false}
              aria-label={AlertStatus.Accepted}
            />
          }
        />
      )}
      {isSnoozedListDisplayed && (
        <AlertGroup
          title="Snoozed"
          alerts={snoozed}
          status={AlertStatus.Snoozed}
          icon={
            <RiTimeLine
              role="img"
              aria-hidden={false}
              aria-label={AlertStatus.Snoozed}
            />
          }
        />
      )}
      {isDismissedListDisplayed && (
        <AlertGroup
          title="Dismissed"
          alerts={dismissed}
          status={AlertStatus.Dismissed}
          icon={
            <RiDeleteBinLine
              role="img"
              aria-hidden={false}
              aria-label={AlertStatus.Dismissed}
            />
          }
        />
      )}
    </Collapse>
  );
};
