/**
 *		���ñհ�ʵ�ֵ����ݴ洢
 * @param string key ����
 * @param mixed value ��ֵ
 * @author ���س�
 * @time 2016-02-18 08:46:29
 */
var db = (function() {
    
    var data = {}; //������������
    
    /**���ⲿ��© getter��setter �ӿ�*/
    return function(key, value) {
        return value === undefined ? data[key] : data[key] = value;
    }
    
})();
