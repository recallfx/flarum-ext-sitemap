import SettingsModal from 'flarum/components/SettingsModal';

export default class SitemapSettingsModal extends SettingsModal {
  className() {
    return 'SitemapSettingsModal Modal--small';
  }

  title() {
    return 'Sitemap Settings';
  }

  form() {
    let id = this.setting('recallfx.sitemap.id', 0) + 1;

    return [
      <div className="Form-group">
        <label>{app.translator.trans('recallfx-sitemap.admin.title')}</label>
        <p>{app.translator.trans('recallfx-sitemap.admin.text')} = {id}</p>
        <p><a href="/sitemap.xml">{app.translator.trans('recallfx-sitemap.admin.link')}</a></p>
        <input type="hidden" className="FormControl" value={id}/>
      </div>
    ];
  }
}
