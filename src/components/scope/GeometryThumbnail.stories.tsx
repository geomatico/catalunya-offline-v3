import React from 'react';
import {Meta, Story} from '@storybook/react';

import GeometryThumbnail, {GeometryThumbnailProps} from './GeometryThumbnail';

export default {
  title: 'Scope/GeometryThumbnail',
  component: GeometryThumbnail,
  argTypes: {
    color: {
      control: 'color'
    },
    size: {
      control: { type: 'range', min: 16, max: 512, step: 1}
    }
  }
} as Meta;

const Template: Story<GeometryThumbnailProps> = args => <GeometryThumbnail {...args}/>;

export const Default = Template.bind({});
Default.args = {
  geometry: {
    type: 'LineString',
    coordinates:  [
      [
        2.3872556949480668,
        41.76514120726873
      ],
      [
        2.3877937886015843,
        41.76557904654334
      ],
      [
        2.389554822378784,
        41.76503174698345
      ],
      [
        2.3899950808225583,
        41.76463039100619
      ],
      [
        2.392343125859128,
        41.76448444275567
      ],
      [
        2.392147455438675,
        41.763827671519095
      ],
      [
        2.392294208254242,
        41.76284250205879
      ],
      [
        2.392147455438675,
        41.76229517915678
      ],
      [
        2.3926855490932155,
        41.761784340235465
      ],
      [
        2.3923920434639854,
        41.76105456329353
      ],
      [
        2.392783384302959,
        41.760178820007866
      ],
      [
        2.3934193131671577,
        41.75988690292371
      ],
      [
        2.3945444180800735,
        41.760215309550034
      ],
      [
        2.3945933356849594,
        41.75897465347538
      ],
      [
        2.395718440597875,
        41.75839080702377
      ],
      [
        2.396060863831991,
        41.75773397341584
      ],
      [
        2.3959141110173334,
        41.756529761007926
      ],
      [
        2.397430556770189,
        41.75601887619095
      ],
      [
        2.398800249707449,
        41.75561746383829
      ],
      [
        2.399974272225222,
        41.755252541339786
      ],
      [
        2.400414530669053,
        41.754851124194204
      ],
      [
        2.401050459528534,
        41.75561746385844
      ],
      [
        2.4019795685637177,
        41.75549329332287
      ],
      [
        2.4029579206749645,
        41.75501889277817
      ],
      [
        2.404063929632258,
        41.75536352151681
      ],
      [
        2.4047487762201456,
        41.755837919667556
      ],
      [
        2.406774413608588,
        41.757034958392836
      ],
      [
        2.4072635903749813,
        41.757655308767
      ],
      [
        2.407100343575962,
        41.75853024454355
      ],
      [
        2.4070025083662188,
        41.75951548021021
      ],
      [
        2.4072470963915293,
        41.76017229558374
      ],
      [
        2.405779568110745,
        41.7600263370054
      ],
      [
        2.4047887413627507,
        41.760026336819976
      ],
      [
        2.403712554054664,
        41.76020878475677
      ],
      [
        2.4035658012400916,
        41.76057367907492
      ],
      [
        2.404446318128606,
        41.76097506042754
      ],
      [
        2.405229000028072,
        41.76112101709458
      ],
      [
        2.4052697535750838,
        41.761739297651275
      ],
      [
        2.4050740831556254,
        41.76199471779924
      ],
      [
        2.4052697535750838,
        41.76254204326477
      ],
      [
        2.4065416116667393,
        41.762724484671196
      ],
      [
        2.407934376198085,
        41.76261502026293
      ],
      [
        2.406810738428419,
        41.76361387275696
      ],
      [
        2.4047072814333035,
        41.764197671733314
      ],
      [
        2.4034843413556644,
        41.76489092659892
      ],
      [
        2.402508576543795,
        41.76526923233797
      ],
      [
        2.4007068985649482,
        41.7661776897755
      ],
      [
        2.4025168499459824,
        41.7663236341744
      ],
      [
        2.401880921082693,
        41.76643309225568
      ]
    ]
  }
};