import { BaseViewCollectionItem } from '../../_components/new/'
import {
  BaseFormButtonBar,
  BaseFormGroupChosenMultiple,
  BaseFormGroupChosenOne,
  BaseFormGroupInput,
  BaseFormGroupSwitch,
} from '@/components/new/'
import BaseFormGroupActions from './BaseFormGroupActions'
import BaseFormGroupAnswers from './BaseFormGroupAnswers'
import BaseFormGroupCondition from './BaseFormGroupCondition'
import BaseFormGroupParams from './BaseFormGroupParams'
import BaseFormGroupNetworkSwitch from './BaseFormGroupNetworkSwitch'
import TheForm from './TheForm'
import TheView from './TheView'
import ToggleStatus from './ToggleStatus'

export {
  BaseFormButtonBar                   as FormButtonBar,

  BaseFormGroupActions                as FormGroupActions,
  BaseFormGroupSwitch                 as FormGroupActionsSynchronous,
  BaseFormGroupInput                  as FormGroupAnswer,
  BaseFormGroupAnswers                as FormGroupAnswers,
  BaseFormGroupCondition              as FormGroupCondition,
  BaseFormGroupInput                  as FormGroupDescription,
  BaseFormGroupInput                  as FormGroupIdentifier,
  BaseFormGroupInput                  as FormGroupLog,
  BaseFormGroupSwitch                 as FormGroupMergeAnswer,
  BaseFormGroupParams                 as FormGroupParams,
  BaseFormGroupChosenOne              as FormGroupRadiusStatus,
  BaseFormGroupChosenOne              as FormGroupResponseCode,
  BaseFormGroupChosenOne              as FormGroupRole,
  BaseFormGroupSwitch                 as FormGroupRunActions,
  BaseFormGroupChosenMultiple         as FormGroupScopes,
  BaseFormGroupSwitch                 as FormGroupFilterEnabled,
  BaseFormGroupNetworkSwitch          as FormGroupNetworkSwitch,

  BaseViewCollectionItem              as BaseView,
  TheForm,
  TheView,
  ToggleStatus
}
