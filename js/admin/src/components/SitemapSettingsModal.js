import SettingsModal from 'flarum/components/SettingsModal';

export default class SitemapSettingsModal extends SettingsModal {
  className() {
    return 'SitemapSettingsModal Modal--small';
  }

  title() {
    return 'Sitemap Settings';
  }

  form() {
    const idFunc = this.setting('recallfx.sitemap.id', 0);
    let id = 0;

    if (typeof idFunc === 'function') {
      id = idFunc() + 1;
      idFunc(id);
    }

    return [
      <div className="Form-group">
        <label>{app.translator.trans('recallfx-sitemap.admin.title')}</label>
        <p>{app.translator.trans('recallfx-sitemap.admin.text')}</p>
        <p><a href="/sitemap.xml">{app.translator.trans('recallfx-sitemap.admin.link')}</a></p>
        <input type="hidden" className="FormControl" value={id}/>
      </div>
    ];
  }
}
