import { BaseViewCollectionItem } from '../../_components/new/'
import {
  BaseFormButtonBar,
  BaseFormGroupChosenMultiple,
  BaseFormGroupChosenOne,
  BaseFormGroupInput,
  BaseFormGroupInputNumber,
  BaseFormGroupInputPassword,
  BaseFormGroupTextarea,
  BaseFormGroupToggle,
  BaseFormGroupToggleDisabledEnabled,
  BaseFormGroupToggleNoYes
} from '@/components/new/'
import {
  BaseFormGroupIntervalUnit
} from '@/views/Configuration/_components/new/'
import BaseFormGroupActiveDirectoryPasswordTest from './BaseFormGroupActiveDirectoryPasswordTest'
import BaseFormGroupAdministrationRules from './BaseFormGroupAdministrationRules'
import BaseFormGroupAuthenticationRules from './BaseFormGroupAuthenticationRules'
import BaseFormGroupHostPortEncryption from './BaseFormGroupHostPortEncryption'
import BaseFormGroupPersonMappings from './BaseFormGroupPersonMappings'
import BaseFormGroupProtocolHostPort from './BaseFormGroupProtocolHostPort'
import BaseFormGroupServerAddressPort from './BaseFormGroupServerAddressPort'
import ButtonSamlMetaData from './ButtonSamlMetaData'
import TheForm from './TheForm'
import TheView from './TheView'

export {
  BaseViewCollectionItem                    as BaseView,
  BaseFormButtonBar                         as FormButtonBar,

  BaseFormGroupInput                        as FormGroupAccessScope,
  BaseFormGroupInput                        as FormGroupAccessTokenParam,
  BaseFormGroupInput                        as FormGroupAccessTokenPath,
  BaseFormGroupInput                        as FormGroupAccountSid,
  BaseFormGroupInput                        as FormGroupActivationDomain,
  BaseFormGroupAdministrationRules          as FormGroupAdministrationRules,
  BaseFormGroupTextarea                     as FormGroupAllowedDomains,
  BaseFormGroupToggleNoYes                  as FormGroupAllowLocaldomain,
  BaseFormGroupInput                        as FormGroupApiKey,
  BaseFormGroupInputPassword                as FormGroupApiPassword,
  BaseFormGroupInput                        as FormGroupApiUsername,
  BaseFormGroupInput                        as FormGroupApiLoginIdentifier,
  BaseFormGroupInput                        as FormGroupAuthenticateRealm,
  BaseFormGroupAuthenticationRules          as FormGroupAuthenticationRules,
  BaseFormGroupInput                        as FormGroupAuthenticationUrl,
  BaseFormGroupChosenOne                    as FormGroupAuthorizationSourceIdentifier,
  BaseFormGroupInput                        as FormGroupAuthorizationUrl,
  BaseFormGroupInput                        as FormGroupAuthorizePath,
  BaseFormGroupInputNumber                  as FormGroupAuthListeningPort,
  BaseFormGroupInput                        as FormGroupAuthToken,
  BaseFormGroupTextarea                     as FormGroupBannedDomains,
  BaseFormGroupInput                        as FormGroupBaseDn,
  BaseFormGroupChosenOne                    as FormGroupBaseUrl,
  BaseFormGroupInput                        as FormGroupBindDn,
  BaseFormGroupToggle                       as FormGroupCacheMatch,
  BaseFormGroupInput                        as FormGroupCertFile,
  BaseFormGroupInput                        as FormGroupCertIdentifier,
  BaseFormGroupInput                        as FormGroupClientIdentifier,
  BaseFormGroupInput                        as FormGroupClientSecret,
  BaseFormGroupInputNumber                  as FormGroupConnectionTimeout,
  BaseFormGroupToggleNoYes                  as FormGroupCreateLocalAccount,
  BaseFormGroupChosenOne                    as FormGroupCurrency,
  BaseFormGroupInputNumber                  as FormGroupDeadDuration,
  BaseFormGroupInput                        as FormGroupDescription,
  BaseFormGroupInput                        as FormGroupDirectBaseUrl,
  BaseFormGroupInput                        as FormGroupDomains,
  BaseFormGroupIntervalUnit                 as FormGroupEmailActivationTimeout,
  BaseFormGroupInput                        as FormGroupEmailAddress,
  BaseFormGroupInput                        as FormGroupEmailAttribute,
  BaseFormGroupToggleNoYes                  as FormGroupEmailRequired,
  BaseFormGroupInput                        as FormGroupGroupHeader,
  BaseFormGroupChosenOne                    as FormGroupHashPasswords,
  BaseFormGroupInput                        as FormGroupHost,
  BaseFormGroupHostPortEncryption           as FormGroupHostPortEncryption,
  BaseFormGroupInput                        as FormGroupIdentifier,
  BaseFormGroupInput                        as FormGroupIdentityProviderCaCertPath,
  BaseFormGroupInput                        as FormGroupIdentityProviderCertPath,
  BaseFormGroupInput                        as FormGroupIdentityProviderEntityIdentifier,
  BaseFormGroupInput                        as FormGroupIdentityProviderMetadataPath,
  BaseFormGroupInput                        as FormGroupIdentityToken,
  BaseFormGroupInput                        as FormGroupKeyFile,
  BaseFormGroupChosenOne                    as FormGroupLang,
  BaseFormGroupIntervalUnit                 as FormGroupLocalAccountExpiration,
  BaseFormGroupInputNumber                  as FormGroupLocalAccountLogins,
  BaseFormGroupChosenMultiple               as FormGroupLocalRealm,
  BaseFormGroupInput                        as FormGroupMerchantIdentifier,
  BaseFormGroupTextarea                     as FormGroupMessage,
  BaseFormGroupToggle                       as FormGroupMonitor,
  BaseFormGroupTextarea                     as FormGroupOptions,
  BaseFormGroupActiveDirectoryPasswordTest  as FormGroupPassword,
  BaseFormGroupInput                        as FormGroupPasswordEmailUpdate,
  BaseFormGroupChosenOne                    as FormGroupPasswordLength,
  BaseFormGroupChosenOne                    as FormGroupPasswordRotation,
  BaseFormGroupInput                        as FormGroupPath,
  BaseFormGroupChosenOne                    as FormGroupPaymentType,
  BaseFormGroupInput                        as FormGroupPaypalCertFile,
  BaseFormGroupPersonMappings               as FormGroupPersonMappings,
  BaseFormGroupInputNumber                  as FormGroupPinCodeLength,
  BaseFormGroupInputNumber                  as FormGroupPort,
  BaseFormGroupInput                        as FormGroupProtectedResourceUrl,
  BaseFormGroupProtocolHostPort             as FormGroupProtocolHostPort,
  BaseFormGroupTextarea                     as FormGroupProxyAddresses,
  BaseFormGroupInput                        as FormGroupPublicClientKey,
  BaseFormGroupInput                        as FormGroupPublishableKey,
  BaseFormGroupInput                        as FormGroupRadiusSecret,
  BaseFormGroupInputNumber                  as FormGroupReadTimeout,
  BaseFormGroupChosenMultiple               as FormGroupRealms,
  BaseFormGroupInput                        as FormGroupRedirectUrl,
  BaseFormGroupToggleDisabledEnabled        as FormGroupRegisterOnActivation,
  BaseFormGroupChosenMultiple               as FormGroupRejectRealm,
  BaseFormGroupChosenOne                    as FormGroupScope,
  BaseFormGroupChosenMultiple               as FormGroupSearchAttributes,
  BaseFormGroupInput                        as FormGroupSearchAttributesAppend,
  BaseFormGroupInputPassword                as FormGroupSecret,
  BaseFormGroupInput                        as FormGroupSecretKey,
  BaseFormGroupToggleDisabledEnabled        as FormGroupSendEmailConfirmation,
  BaseFormGroupServerAddressPort            as FormGroupServerAddressPort,
  BaseFormGroupInput                        as FormGroupServiceFqdn,
  BaseFormGroupInput                        as FormGroupServiceProviderEntityIdentifier,
  BaseFormGroupInput                        as FormGroupServiceProviderCertPath,
  BaseFormGroupInput                        as FormGroupServiceProviderKeyPath,
  BaseFormGroupInput                        as FormGroupSharedSecret,
  BaseFormGroupInput                        as FormGroupSharedSecretDirect,
  BaseFormGroupToggle                       as FormGroupShuffle,
  BaseFormGroupInput                        as FormGroupSite,
  BaseFormGroupIntervalUnit                 as FormGroupSmsActivationTimeout,
  BaseFormGroupChosenMultiple               as FormGroupSmsCarriers,
  BaseFormGroupChosenMultiple               as FormGroupSources,
  BaseFormGroupInput                        as FormGroupSponsorshipBcc,
  BaseFormGroupChosenOne                    as FormGroupStyle,
  BaseFormGroupInput                        as FormGroupTenantIdentifier,
  BaseFormGroupInput                        as FormGroupTerminalGroupIdentifier,
  BaseFormGroupInput                        as FormGroupTerminalIdentifier,
  BaseFormGroupToggle                       as FormGroupTestMode,
  BaseFormGroupInput                        as FormGroupTimeout,
  BaseFormGroupInput                        as FormGroupTransactionKey,
  BaseFormGroupInput                        as FormGroupTwilioPhoneNumber,
  BaseFormGroupInputNumber                  as FormGroupUserGroupsCache,
  BaseFormGroupInput                        as FormGroupUserHeader,
  BaseFormGroupChosenOne                    as FormGroupUsernameAttribute,
  BaseFormGroupToggleNoYes                  as FormGroupValidateSponsor,
  BaseFormGroupInputNumber                  as FormGroupWriteTimeout,

  ButtonSamlMetaData,
  TheForm,
  TheView
}
