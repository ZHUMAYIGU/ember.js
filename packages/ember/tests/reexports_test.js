import Ember from '../index';
import { confirmExport } from 'internal-test-helpers';
import { moduleFor, AbstractTestCase } from 'internal-test-helpers';

moduleFor(
  'ember reexports',
  class extends AbstractTestCase {
    [`@test Ember exports correctly`](assert) {
      allExports.forEach(reexport => {
        let [path, moduleId, exportName] = reexport;

        // default path === exportName if none present
        if (!exportName) {
          exportName = path;
        }

        confirmExport(Ember, assert, path, moduleId, exportName, `Ember.${path} exports correctly`);
      });
    }

    ['@test Ember.String.isHTMLSafe exports correctly'](assert) {
      confirmExport(Ember, assert, 'String.isHTMLSafe', 'ember-glimmer', 'isHTMLSafe');
    }
  }
);

let allExports = [
  // ember-environment
  ['ENV', 'ember-environment', { get: 'getENV' }],
  ['lookup', 'ember-environment', { get: 'getLookup', set: 'setLookup' }],

  // ember-utils
  ['getOwner', 'ember-utils', 'getOwner'],
  ['setOwner', 'ember-utils', 'setOwner'],
  ['assign', 'ember-utils'],
  ['GUID_KEY', 'ember-utils'],
  ['uuid', 'ember-utils'],
  ['generateGuid', 'ember-utils'],
  ['guidFor', 'ember-utils'],
  ['inspect', 'ember-utils'],
  ['makeArray', 'ember-utils'],
  ['canInvoke', 'ember-utils'],
  ['tryInvoke', 'ember-utils'],
  ['wrap', 'ember-utils'],
  ['NAME_KEY', 'ember-utils'],

  // container
  ['Registry', 'container', 'Registry'],
  ['Container', 'container', 'Container'],

  // ember-debug
  ['deprecateFunc', 'ember-debug'],
  ['deprecate', 'ember-debug'],
  ['assert', 'ember-debug'],
  ['warn', 'ember-debug'],
  ['debug', 'ember-debug'],
  ['runInDebug', 'ember-debug'],
  ['Debug.registerDeprecationHandler', 'ember-debug', 'registerDeprecationHandler'],
  ['Debug.registerWarnHandler', 'ember-debug', 'registerWarnHandler'],
  ['Error', '@ember/error', 'default'],

  // ember-metal
  ['computed', 'ember-metal', '_globalsComputed'],
  ['computed.alias', 'ember-metal', 'alias'],
  ['ComputedProperty', 'ember-metal'],
  ['cacheFor', 'ember-metal', 'getCachedValueFor'],
  ['merge', 'ember-metal'],
  ['instrument', '@ember/instrumentation'],
  ['subscribe', '@ember/instrumentation', 'subscribe'],
  ['Instrumentation.instrument', '@ember/instrumentation', 'instrument'],
  ['Instrumentation.subscribe', '@ember/instrumentation', 'subscribe'],
  ['Instrumentation.unsubscribe', '@ember/instrumentation', 'unsubscribe'],
  ['Instrumentation.reset', '@ember/instrumentation', 'reset'],
  ['testing', 'ember-debug', { get: 'isTesting', set: 'setTesting' }],
  ['onerror', 'ember-error-handling', { get: 'getOnerror', set: 'setOnerror' }],
  ['FEATURES', 'ember/features'],
  ['FEATURES.isEnabled', 'ember-debug', 'isFeatureEnabled'],
  ['meta', 'ember-metal'],
  ['get', 'ember-metal'],
  ['set', 'ember-metal'],
  ['_getPath', 'ember-metal'],
  ['getWithDefault', 'ember-metal'],
  ['trySet', 'ember-metal'],
  ['_Cache', 'ember-metal', 'Cache'],
  ['on', 'ember-metal'],
  ['addListener', 'ember-metal'],
  ['removeListener', 'ember-metal'],
  ['sendEvent', 'ember-metal'],
  ['hasListeners', 'ember-metal'],
  ['isNone', 'ember-metal'],
  ['isEmpty', 'ember-metal'],
  ['isBlank', 'ember-metal'],
  ['isPresent', 'ember-metal'],
  ['_Backburner', 'backburner', 'default'],
  ['run', '@ember/runloop', '_globalsRun'],
  ['run.backburner', '@ember/runloop', 'backburner'],
  ['run.begin', '@ember/runloop', 'begin'],
  ['run.bind', '@ember/runloop', 'bind'],
  ['run.cancel', '@ember/runloop', 'cancel'],
  ['run.debounce', '@ember/runloop', 'debounce'],
  ['run.end', '@ember/runloop', 'end'],
  ['run.hasScheduledTimers', '@ember/runloop', 'hasScheduledTimers'],
  ['run.join', '@ember/runloop', 'join'],
  ['run.later', '@ember/runloop', 'later'],
  ['run.next', '@ember/runloop', 'next'],
  ['run.once', '@ember/runloop', 'once'],
  ['run.schedule', '@ember/runloop', 'schedule'],
  ['run.scheduleOnce', '@ember/runloop', 'scheduleOnce'],
  ['run.throttle', '@ember/runloop', 'throttle'],
  ['run.currentRunLoop', '@ember/runloop', { get: 'getCurrentRunLoop' }],
  ['propertyWillChange', 'ember-metal'],
  ['propertyDidChange', 'ember-metal'],
  ['notifyPropertyChange', 'ember-metal'],
  ['overrideChains', 'ember-metal'],
  ['beginPropertyChanges', 'ember-metal'],
  ['endPropertyChanges', 'ember-metal'],
  ['changeProperties', 'ember-metal'],
  ['platform.defineProperty', null, { value: true }],
  ['platform.hasPropertyAccessors', null, { value: true }],
  ['defineProperty', 'ember-metal'],
  ['watchKey', 'ember-metal'],
  ['unwatchKey', 'ember-metal'],
  ['removeChainWatcher', 'ember-metal'],
  ['_ChainNode', 'ember-metal', 'ChainNode'],
  ['finishChains', 'ember-metal'],
  ['watchPath', 'ember-metal'],
  ['unwatchPath', 'ember-metal'],
  ['watch', 'ember-metal'],
  ['isWatching', 'ember-metal'],
  ['unwatch', 'ember-metal'],
  ['destroy', 'ember-metal', 'deleteMeta'],
  ['libraries', 'ember-metal'],
  ['OrderedSet', 'ember-metal'],
  ['Map', 'ember-metal'],
  ['MapWithDefault', 'ember-metal'],
  ['getProperties', 'ember-metal'],
  ['setProperties', 'ember-metal'],
  ['expandProperties', 'ember-metal'],
  ['addObserver', 'ember-metal'],
  ['removeObserver', 'ember-metal'],
  ['aliasMethod', 'ember-metal'],
  ['observer', 'ember-metal'],
  ['mixin', 'ember-metal'],
  ['Mixin', 'ember-metal'],

  // ember-console
  ['Logger', 'ember-console', 'default'],

  // ember-views
  ['$', 'ember-views', 'jQuery'],
  ['ViewUtils.isSimpleClick', 'ember-views', 'isSimpleClick'],
  ['ViewUtils.getViewElement', 'ember-views', 'getViewElement'],
  ['ViewUtils.getViewBounds', 'ember-views', 'getViewBounds'],
  ['ViewUtils.getViewClientRects', 'ember-views', 'getViewClientRects'],
  ['ViewUtils.getViewBoundingClientRect', 'ember-views', 'getViewBoundingClientRect'],
  ['ViewUtils.getRootViews', 'ember-views', 'getRootViews'],
  ['ViewUtils.getChildViews', 'ember-views', 'getChildViews'],
  ['ViewUtils.isSerializationFirstNode', 'ember-glimmer', 'isSerializationFirstNode'],
  ['TextSupport', 'ember-views'],
  ['ComponentLookup', 'ember-views'],
  ['EventDispatcher', 'ember-views'],

  // ember-glimmer
  ['Component', 'ember-glimmer', 'Component'],
  ['Helper', 'ember-glimmer', 'Helper'],
  ['Helper.helper', 'ember-glimmer', 'helper'],
  ['Checkbox', 'ember-glimmer', 'Checkbox'],
  ['LinkComponent', 'ember-glimmer', 'LinkComponent'],
  ['TextArea', 'ember-glimmer', 'TextArea'],
  ['TextField', 'ember-glimmer', 'TextField'],
  ['TEMPLATES', 'ember-glimmer', { get: 'getTemplates', set: 'setTemplates' }],
  ['Handlebars.template', 'ember-glimmer', 'template'],
  ['HTMLBars.template', 'ember-glimmer', 'template'],
  ['Handlebars.Utils.escapeExpression', 'ember-glimmer', 'escapeExpression'],
  ['String.htmlSafe', 'ember-glimmer', 'htmlSafe'],
  ['_setComponentManager', 'ember-glimmer', 'componentManager'],

  // ember-runtime
  ['A', 'ember-runtime'],
  ['_RegistryProxyMixin', 'ember-runtime', 'RegistryProxyMixin'],
  ['_ContainerProxyMixin', 'ember-runtime', 'ContainerProxyMixin'],
  ['Object', 'ember-runtime'],
  ['String', 'ember-runtime'],
  ['compare', 'ember-runtime'],
  ['copy', 'ember-runtime'],
  ['isEqual', 'ember-runtime'],
  ['inject', 'ember-runtime'],
  ['Array', 'ember-runtime'],
  ['Comparable', 'ember-runtime'],
  ['Namespace', 'ember-runtime'],
  ['Enumerable', 'ember-runtime'],
  ['ArrayProxy', 'ember-runtime'],
  ['ObjectProxy', 'ember-runtime'],
  ['ActionHandler', 'ember-runtime'],
  ['CoreObject', 'ember-runtime'],
  ['NativeArray', 'ember-runtime'],
  ['Copyable', 'ember-runtime'],
  ['MutableEnumerable', 'ember-runtime'],
  ['MutableArray', 'ember-runtime'],
  ['TargetActionSupport', 'ember-runtime'],
  ['Evented', 'ember-runtime'],
  ['PromiseProxyMixin', 'ember-runtime'],
  ['Observable', 'ember-runtime'],
  ['typeOf', 'ember-runtime'],
  ['isArray', 'ember-runtime'],
  ['Object', 'ember-runtime'],
  ['onLoad', 'ember-runtime'],
  ['runLoadHooks', 'ember-runtime'],
  ['Controller', 'ember-runtime'],
  ['ControllerMixin', 'ember-runtime'],
  ['Service', 'ember-runtime'],
  ['_ProxyMixin', 'ember-runtime'],
  ['RSVP', 'ember-runtime'],
  ['STRINGS', 'ember-runtime', { get: 'getStrings', set: 'setStrings' }],
  [
    'BOOTED',
    'ember-metal',
    { get: 'isNamespaceSearchDisabled', set: 'setNamespaceSearchDisabled' },
  ],
  ['computed.empty', 'ember-runtime', 'empty'],
  ['computed.notEmpty', 'ember-runtime', 'notEmpty'],
  ['computed.none', 'ember-runtime', 'none'],
  ['computed.not', 'ember-runtime', 'not'],
  ['computed.bool', 'ember-runtime', 'bool'],
  ['computed.match', 'ember-runtime', 'match'],
  ['computed.equal', 'ember-runtime', 'equal'],
  ['computed.gt', 'ember-runtime', 'gt'],
  ['computed.gte', 'ember-runtime', 'gte'],
  ['computed.lt', 'ember-runtime', 'lt'],
  ['computed.lte', 'ember-runtime', 'lte'],
  ['computed.oneWay', 'ember-runtime', 'oneWay'],
  ['computed.reads', 'ember-runtime', 'oneWay'],
  ['computed.readOnly', 'ember-runtime', 'readOnly'],
  ['computed.deprecatingAlias', 'ember-runtime', 'deprecatingAlias'],
  ['computed.and', 'ember-runtime', 'and'],
  ['computed.or', 'ember-runtime', 'or'],
  ['computed.sum', 'ember-runtime', 'sum'],
  ['computed.min', 'ember-runtime', 'min'],
  ['computed.max', 'ember-runtime', 'max'],
  ['computed.map', 'ember-runtime', 'map'],
  ['computed.sort', 'ember-runtime', 'sort'],
  ['computed.setDiff', 'ember-runtime', 'setDiff'],
  ['computed.mapBy', 'ember-runtime', 'mapBy'],
  ['computed.filter', 'ember-runtime', 'filter'],
  ['computed.filterBy', 'ember-runtime', 'filterBy'],
  ['computed.uniq', 'ember-runtime', 'uniq'],
  ['computed.uniqBy', 'ember-runtime', 'uniqBy'],
  ['computed.union', 'ember-runtime', 'union'],
  ['computed.intersect', 'ember-runtime', 'intersect'],
  ['computed.collect', 'ember-runtime', 'collect'],

  // ember-routing
  ['Location', 'ember-routing'],
  ['AutoLocation', 'ember-routing'],
  ['HashLocation', 'ember-routing'],
  ['HistoryLocation', 'ember-routing'],
  ['NoneLocation', 'ember-routing'],
  ['controllerFor', 'ember-routing'],
  ['generateControllerFactory', 'ember-routing'],
  ['generateController', 'ember-routing'],
  ['RouterDSL', 'ember-routing'],
  ['Router', 'ember-routing'],
  ['Route', 'ember-routing'],

  // ember-application
  ['Application', 'ember-application'],
  ['ApplicationInstance', 'ember-application'],
  ['Engine', 'ember-application'],
  ['EngineInstance', 'ember-application'],
  ['Resolver', 'ember-application'],
  ['DefaultResolver', 'ember-application', 'Resolver'],

  // ember-extension-support
  ['DataAdapter', 'ember-extension-support'],
  ['ContainerDebugAdapter', 'ember-extension-support'],
];
