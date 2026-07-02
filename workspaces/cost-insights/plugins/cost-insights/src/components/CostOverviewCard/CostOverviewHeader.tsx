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
import { PropsWithChildren } from 'react';
import Box from '@material-ui/core/Box';
import { Text } from '@backstage/ui';

type CostOverviewHeaderProps = {
  title: string;
  subtitle?: string;
};

export const CostOverviewHeader = ({
  title,
  subtitle,
  children,
}: PropsWithChildren<CostOverviewHeaderProps>) => (
  <Box
    mt={2}
    ml={1}
    mb={1}
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
  >
    <Box minHeight={40} paddingRight={5}>
      <Text as="h5" variant="title-small">
        {title}
      </Text>
      {!!subtitle && (
        <Text as="div" color="secondary">
          {subtitle}
        </Text>
      )}
    </Box>
    <Box minHeight={40} maxHeight={60} display="flex">
      {children}
    </Box>
  </Box>
);
